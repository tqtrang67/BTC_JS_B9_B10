// lấy thông tin từ form
function layThongTin() {
	let tknv = document.getElementById("tknv").value;
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let passWord = document.getElementById("password").value;
	let datePicker = document.getElementById("datepicker").value;
	let luongCB = parseFloat(document.getElementById("luongCB").value * 1);
	let chucVu = document.getElementById("chucvu").value;
	let gioLam = parseInt(document.getElementById("gioLam").value);

	let nv = new NhanVien(
		tknv,
		name,
		email,
		passWord,
		datePicker,
		luongCB,
		chucVu,
		gioLam
	);

	console.log("🚀 ~ layThongTin ~ nv:", nv);
	return nv;
}

// Hiển thị thông tin
function hienThiThongTin(nv) {
	document.getElementById("tknv").value = nv.tknv;
	document.getElementById("name").value = nv.name;
	document.getElementById("email").value = nv.email;
	document.getElementById("password").value = nv.passWord;
	document.getElementById("datepicker").value = nv.datePicker;
	document.getElementById("luongCB").value = nv.luongCB * 1;
	document.getElementById("chucvu").value = nv.chucVu;
	document.getElementById("gioLam").value = nv.gioLam * 1;
}

// render
function renderDSNV(DSNV) {
	let contentHTML = "";

	DSNV.forEach((nv) => {
		let trString = `<tr>
							<td>${nv.tknv}</td>
							<td>${nv.name}</td>
							<td>${nv.email}</td>
							<td>${nv.datePicker}</td>
							<td>${nv.chucVu}</td>
							<td>${nv.tongTongLuong()}</td>
							<td>${nv.xepLoai()}</td>	
							<td>
								<button class="btn btn-info" data-toggle="modal"
								data-target="#myModal" onclick="suaNV('${nv.tknv}')">Sửa</button>
								<button class="btn btn-danger" onclick="xoaNV('${nv.tknv}')">Xóa</button>
							</td>
						</tr>`;
		contentHTML += trString;
	});
	document.getElementById("tableDanhSach").innerHTML = contentHTML;
}
