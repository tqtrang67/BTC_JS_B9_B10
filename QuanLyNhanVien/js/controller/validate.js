function validateTKNV(value, idErr) {
	// regex taikhoan
	const regexTKNV = /^\d{4,6}$/;
	let isCheckTKNV = regexTKNV.test(value);
	if (!isCheckTKNV) {
		document.getElementById(idErr).innerHTML =
			"Chưa đúng định dạng tài khoản";
		return false;
	}
	document.getElementById(idErr).innerHTML = "";
	return true;
}

function validateEmail(value, idErr) {
	// regex email
	const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	let isCheckEmail = regexEmail.test(value);
	if (!isCheckEmail) {
		document.getElementById(idErr).innerHTML = "Chưa đúng định dạng email";
		return false;
	}
	document.getElementById(idErr).innerHTML = "";
	return true;
}

function validateName(value, idErr) {
	// regex name
	const regexName = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
	let isCheckName = regexName.test(value);
	if (!isCheckName) {
		document.getElementById(idErr).innerHTML =
			"Chưa đúng định dạng tên nhân viên";
		return false;
	}
	document.getElementById(idErr).innerHTML = "";
	return true;
}

function validatePassWord(value, idErr) {
	// regex password
	const regexPassWord = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,10}$/;
	let isCheckPassWord = regexPassWord.test(value);
	if (!isCheckPassWord) {
		document.getElementById(idErr).innerHTML =
			"Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
		return false;
	}
	document.getElementById(idErr).innerHTML = "";
	return true;
}

function validateDate(value, idErr) {
	const regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
	let isCheckDate = regexDate.test(value);
	if (!isCheckDate) {
		document.getElementById(idErr).innerHTML =
			"Chưa đúng định dạng ngày, tháng , năm";
		return false;
	}
	document.getElementById(idErr).innerHTML = "";
	return true;
}

function validateLuong(value, idErr) {
	if (value === 0 || isNaN(value)) {
		document.getElementById(idErr).innerHTML =
			"Nội dung không được để trống và chỉ được nhập số";
		return false;
	} else if (value < 1000000 || value > 20000000) {
		document.getElementById(idErr).innerHTML =
			"Lương cơ bản phải từ 1.000.000 đến 20.000.000";
		return false;
	} else {
		document.getElementById(idErr).innerHTML = "";
		return true;
	}
}

function validateChucVu(value, idErr) {
	const isCheckChucVu = ["Sếp", "Trưởng phòng", "Nhân viên"];
	if (!isCheckChucVu.includes(value)) {
		document.getElementById(idErr).innerHTML =
			"Không được để trống, hãy chọn đúng chức vụ ";
		return false;
	}
	document.getElementById(idErr).innerHTML = "";
	return true;
}

function validateGioLam(value, idErr) {
	if (!value) {
		document.getElementById(idErr).innerHTML =
			"Không được để trống, hãy chọn đúng giờ làm ";
		return false;
	} else if (isNaN(value) || value <= 80 || value >= 200) {
		document.getElementById(idErr).innerHTML = "Số giờ phải từ 80 đến 200";
		return false;
	} else {
		document.getElementById(idErr).innerHTML = "";
		return true;
	}
}
