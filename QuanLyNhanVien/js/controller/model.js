function NhanVien(
	_tknv,
	_name,
	_email,
	_passWord,
	_datePicker,
	_luongCB,
	_chucVu,
	_gioLam
) {
	this.tknv = _tknv;
	this.name = _name;
	this.email = _email;
	this.passWord = _passWord;
	this.datePicker = _datePicker;
	this.luongCB = _luongCB;
	this.chucVu = _chucVu;
	this.gioLam = _gioLam;
	this.tongTongLuong = function () {
		if (this.chucVu === "Sếp") {
			return this.luongCB * 3;
		} else if (this.chucVu === "Trưởng phòng") {
			return this.luongCB * 2;
		} else {
			return this.luongCB;
		}
	};
	this.xepLoai = function () {
		if (this.gioLam >= 192) {
			return "xuất sắc";
		} else if (this.gioLam >= 176) {
			return "giỏi";
		} else if (this.gioLam >= 160) {
			return "khá";
		} else {
			return "trung bình";
		}
	};
}
