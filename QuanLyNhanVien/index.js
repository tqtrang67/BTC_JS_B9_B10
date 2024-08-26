let DSNV = [];

let dataJson = localStorage.getItem("DSNV_JSON");
let dataArray = JSON.parse(dataJson || "[]");
DSNV = dataArray.map(function (item) {
	let nv = new NhanVien(
		item.tknv,
		item.name,
		item.email,
		item.passWork,
		item.datePicker,
		item.luongCB,
		item.chucVu,
		item.gioLam
	);
	return nv;
});

renderDSNV(DSNV);

function themNhanVien() {
	let nv = layThongTin();

	let isId = DSNV.some((item) => item.tknv === nv.tknv);
	if (isId) {
		alert("Tài khoản nhân viên đã tồn tại! Vui lòng chọn tài khoản khác.");
	}
	let isValid =
		validateTKNV(nv.tknv, "tbTKNV") &
		validateName(nv.name, "tbTen") &
		validateEmail(nv.email, "tbEmail") &
		validatePassWord(nv.passWork, "tbMatKhau") &
		validateDate(nv.datePicker, "tbNgay") &
		validateLuong(nv.luongCB, "tbLuongCB") &
		validateChucVu(nv.chucVu, "tbChucVu") &
		validateGioLam(nv.gioLam, "tbGiolam");
	if (isValid) {
		DSNV.push(nv);
		// lưu xuống local storage
		let dataJson = JSON.stringify(DSNV);
		localStorage.setItem("DSNV_JSON", dataJson);
		renderDSNV(DSNV);
		resetForm();
	}
}

function suaNV(id) {
	// id => tìm ra index => lấy ra object sinh viên cần sửa => hiển thị lên form
	let index = DSNV.findIndex(function (item) {
		return item.tknv === id;
	});

	// Lấy ra đối tượng sinh viên cần sửa
	let nv = DSNV[index];
	// Hiển thị thông tin sinh viên lên form để người dùng có thể sửa
	hienThiThongTin(nv);

	// ngăn user sửa mã nv
	document.getElementById("tknv").disabled = true;
}

function xoaNV(id) {
	// splice (vị trí, số lượng phần tử cần xoá )
	// tìm vị trí => dùng findIndex
	let index = DSNV.findIndex(function (item) {
		return item.tknv === id;
	});
	console.log("🚀 ~ index ~ index:", index);

	DSNV.splice(index, 1);
	let dataJSON = JSON.stringify(DSNV);
	localStorage.setItem("DSNV_JSON", dataJSON);
	// cập nhật lại layout sau khi xoá
	renderDSNV(DSNV);
}

function resetForm() {
	document.getElementById("formDSNV").reset();
	document.getElementById("tknv").disabled = false;
}

function capNhatNhanVien() {
	let nv = layThongTin();
	let index = DSNV.findIndex(function (item) {
		return item.tknv === nv.tknv;
	});
	DSNV[index] = nv;
	// cập nhật lại local storage
	let dataJson = JSON.stringify(DSNV);
	localStorage.setItem("DSNV_JSON", dataJson);
	// render lại layout sau khi update data
	renderDSNV(DSNV);
}

function search() {
	let loaiNV = document.getElementById("searchName").value.toLowerCase();
	if (!loaiNV) {
		return renderDSNV(DSNV);
	} else {
		let timKiem = DSNV.filter(function (item) {
			return item.xepLoai() === loaiNV;
		});

		return renderDSNV(timKiem);
	}
}
