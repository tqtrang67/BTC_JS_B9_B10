let DSNV = [];

let dataJson = localStorage.getItem("DSNV_JSON");
let dataArray = JSON.parse(dataJson || "[]");
DSNV = dataArray.map(function (item) {
	let nv = new NhanVien(
		item.tknv,
		item.name,
		item.email,
		item.passWord,
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
		return;
	}
	let isValid =
		validateTKNV(nv.tknv, "tbTKNV") &
		validateName(nv.name, "tbTen") &
		validateEmail(nv.email, "tbEmail") &
		validatePassWord(nv.passWord, "tbMatKhau") &
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
		$("#myModal").modal("hide");
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
	console.log("🚀 ~ suaNV ~ nv:", nv);

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

function capNhatNhanVien() {
	let nv = layThongTin();
	console.log("🚀 ~ capNhatNhanVien ~ nv:", nv.passWord);

	let isValid =
		validateName(nv.name, "tbTen") &
		validateEmail(nv.email, "tbEmail") &
		validatePassWord(nv.passWord, "tbMatKhau") &
		validateDate(nv.datePicker, "tbNgay") &
		validateLuong(nv.luongCB, "tbLuongCB") &
		validateChucVu(nv.chucVu, "tbChucVu") &
		validateGioLam(nv.gioLam, "tbGiolam");

	if (isValid) {
		// Tìm vị trí nhân viên trong danh sách
		let index = DSNV.findIndex(function (item) {
			return item.tknv === nv.tknv;
		});

		// Cập nhật thông tin nhân viên
		DSNV[index] = nv;

		// Cập nhật lại local storage
		let dataJson = JSON.stringify(DSNV);
		localStorage.setItem("DSNV_JSON", dataJson);

		// Render lại danh sách nhân viên sau khi cập nhật
		renderDSNV(DSNV);

		// Đóng modal
		$("#myModal").modal("hide");
	}
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

function resetForm() {
	document.getElementById("formDSNV").reset();
	document.getElementById("tknv").disabled = false;

	document.getElementById("tbTKNV").innerHTML = "";
	document.getElementById("tbTen").innerHTML = "";
	document.getElementById("tbEmail").innerHTML = "";
	document.getElementById("tbMatKhau").innerHTML = "";
	document.getElementById("tbNgay").innerHTML = "";
	document.getElementById("tbLuongCB").innerHTML = "";
	document.getElementById("tbChucVu").innerHTML = "";
	document.getElementById("tbGiolam").innerHTML = "";
}

// reset khi đóng modal
$(document).ready(function () {
	$("#myModal").on("hide.bs.modal", function () {
		resetForm();
	});
});
