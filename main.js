function domId(id) {
    return document.getElementById(id);
}

function quyDoi(id) {
    var quyDoi = new Intl.NumberFormat('vn-VN');
    return quyDoi.format(id);

}

// input
/**
 * tạo biến cho ng dùng nhập
 * điểm 3 môn
 * điểm hội đồng
 * điểm ưu tiên gồm khu vực và đối tượng dự thi
 * kết quả thi
 */

var toan = 0;
var ly = 0;
var hoa = 0;
var diemHD = 0;
var khuVuc = 0;
var doiTuong = 0;
// xử lý
/**
 * điểm tổng kết gồm 3 môn và điểm ưu tiên
 * điểm ưu tiên gồm khu vực và đối tượng dự thi
 */
function tinhKhuVuc() {
    khuVuc = domId('khuVuc').value;

    switch (khuVuc) {
        case 'A':
            khuVuc = 2;
            break

        case 'B':
            khuVuc = 1;
            break

        case 'C':
            khuVuc = 0.5;
            break

        default:
            khuVuc = 0;
    }
}

function tinhDoiTuong() {
    doiTuong = domId('doiTuong').value;
    if (doiTuong == 1) {
        doiTuong = 2.5;
    } else if (doiTuong == 2) {
        doiTuong = 1.5;

    } else if (doiTuong == 3) {
        doiTuong = 1;
    } else {
        doiTuong = 0;
    }

}
function btnKetQua() {
    toan = domId('toan').value * 1;
    ly = domId('ly').value * 1;
    hoa = domId('hoa').value * 1;
    diemHD = domId('diemHD').value * 1;
    tinhKhuVuc();
    tinhDoiTuong();


    var diemUuTien = khuVuc + doiTuong;
    var diemTongKet = toan + ly + hoa + diemUuTien;
    var ketQua = '';
    if (diemTongKet >= diemHD && toan > 0 && ly > 0 && hoa > 0 && diemHD > 0) {
        ketQua = 'Đậu';
    } else if (toan > 10 || ly > 10 || hoa > 10 || diemHD <= 0) {
        alert('Vui lòng nhập điểm hợp lệ !');
        diemTongKet = 0;
    }
    else {
        ketQua = 'Rớt';
    }
    // output
    /**
     * show kết quả 
     */
    domId('ketQua').innerHTML = 'Tổng điểm: ' + diemTongKet + ' ' + ketQua;
}




// BÀI TÍNH SỐ ĐIỆN 
/**
 * tạo biến ten 
 * tạo biến soDien
 * tạo biến ketQuaKw
 */
//input
var ketQuaKw = '';
var tongTien = 0;

// xử lý
function tinhTienDien(soDien) {
    if (soDien > 0 && soDien <= 50) {
        tongTien = soDien * 500;

    } else if (soDien > 50 && soDien <= 100) {
        tongTien = (soDien * 0 + 50) * 500 + ((soDien - 50) * 650);

    } else if (soDien > 100 && soDien <= 150) {
        tongTien = ((soDien * 0 + 50) * 500) + ((soDien * 0 + 100 - 50) * 650) + ((soDien - 100) * 850);

    } else if (soDien > 150 && soDien <= 200) {
        tongTien = ((soDien * 0 + 50) * 500) + ((soDien * 0 + 100 - 50) * 650) + ((soDien * 0 + 150 - 100) * 850) + ((soDien - 150) * 1100);
    } else if (soDien > 200) {
        tongTien = ((soDien * 0 + 50) * 500) + ((soDien * 0 + 100 - 50) * 650) + ((soDien * 0 + 150 - 100) * 850) + ((soDien * 0 + 200 - 150) * 1100) + ((soDien - 200) * 1300);
    } else {
        tongTien = 0;
    }
}

function btntinhTienDien() {
    var ten = domId('ten').value;
    var soDien = Math.floor(domId('soDien').value * 1);
    tinhTienDien(soDien);


    // output
    // var quyDoi = new Intl.NumberFormat('vn-VN');
    domId('ketQuaKw').innerHTML = ten + ' Số tiền: ' + quyDoi(tongTien) + 'đ';
}




//BÀI TÍNH THUẾ THU NHẬP CÁ NHÂN


//input
var thue = 0;

//xử lý 
function tinhThue(tongThuNhap, soNguoiPT) {
    var thuNhapChiuThue = tongThuNhap - 4000000 - (soNguoiPT * 1600000);

    if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000 && soNguoiPT > 0) {
        thue = thuNhapChiuThue * 0.05;
    }

    else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000 && soNguoiPT > 0) {
        thue = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
    }

    else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000 && soNguoiPT > 0) {
        thue = 60000000 * 0.05 + (120000000 - 60000000) * 0.1 + (thuNhapChiuThue - 120000000) * 0.15;
    }

    else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000 && soNguoiPT > 0) {
        thue = 60000000 * 0.05 + (120000000 - 60000000) * 0.1 + (210000000 - 120000000) * 0.15 + (thuNhapChiuThue - 210000000) * 0.2;
    }

    else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000 && soNguoiPT > 0) {
        thue = 60000000 * 0.05 + (120000000 - 60000000) * 0.1 + (210000000 - 120000000) * 0.15 + (384000000 - 210000000) * 0.2 + (thuNhapChiuThue - 384000000) * 0.25;
    }

    else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000 && soNguoiPT > 0) {
        thue = 60000000 * 0.05 + (120000000 - 60000000) * 0.1 + (210000000 - 120000000) * 0.15 + (384000000 - 210000000) * 0.2 + (624000000 - 384000000) * 0.25 + (thuNhapChiuThue - 624000000) * 0.3;
    }

    else if (thuNhapChiuThue > 960000000 && soNguoiPT > 0) {
        thue = 60000000 * 0.05 + (120000000 - 60000000) * 0.1 + (210000000 - 120000000) * 0.15 + (384000000 - 210000000) * 0.2 + (624000000 - 384000000) * 0.25 + (960000000 - 624000000) * 0.3 + (thuNhapChiuThue - 960000000) * 0.35;
    } else {
        alert('Vui lòng nhập số hợp lệ !');
    }
    // return thuNhapChiuThue;
}


function btnThuNhap() {
    var hoVaTen = domId('hoVaTen').value;
    var tongThuNhap = Number(Math.floor(domId('tongThuNhap').value));
    var soNguoiPT = Number(Math.floor(domId('soNguoiPT').value));

    tinhThue(tongThuNhap, soNguoiPT);


    //output

    domId('ketQuaThue').innerHTML = hoVaTen + '<div>Thuế thu nhập cá nhân phải trả: ' + quyDoi(thue) + 'vnđ' + '</div>';
}




//  BÀI TÍNH TIỀN CÁP


//input
var tongTienCap = 0;
var loaiKH = '';

//xử lý
function inputLoaiKH() {
    loaiKH = domId('loaiKH').value;
    switch (loaiKH) {
        case 'doanhNghiep':
            var hienThi = domId('soKetNoi');
            hienThi.removeAttribute('disabled');
            break;
        default:
            hienThi = domId('soKetNoi');
            hienThi.setAttribute('disabled', 'true');

            break;

    }

}

function chonLoaiKH(loaiKH, soKetNoi, soKenh) {
    switch (loaiKH) {
        case 'nhaDan':
            if (soKenh > 0) {
                tongTienCap = 4.5 + 20.5 + (7.5 * soKenh);
            } else {
                tongTienCap = 0;
            }


            break;
        case 'doanhNghiep':

            if (soKetNoi > 0 && soKetNoi <= 10) {
                tongTienCap = 15 + (7.5 * soKetNoi) + (50 * soKenh);
            } else if (soKetNoi > 10) {
                tongTienCap = 15 + ((7.5 * 10) + (soKetNoi - 10) * 5) + (50 * soKenh);
            }

            break;

        default: alert('Vui lòng chọn loại khách hàng');
            break;
    }
}


function btnTienCap() {
    var maKH = domId('maKH').value;
    loaiKH = domId('loaiKH').value;
    var soKetNoi = domId('soKetNoi').value * 1;
    soKetNoi = Math.floor(soKetNoi);
    var soKenh = domId('soKenh').value * 1;
    soKenh = Math.floor(soKenh);

    chonLoaiKH(loaiKH, soKetNoi, soKenh);


    //output

    domId('ketQuaCap').innerHTML = 'Mã khách hàng: ' + maKH + '<div>' + ' Tổng tiền: ' + tongTienCap + '$' + '</div>';
}
