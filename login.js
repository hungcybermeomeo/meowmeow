//define phương thức querySelector() = $
var $ = document.querySelector.bind(document);

//define phương thức querySelectorAll() = $
var $$ = document.querySelectorAll.bind(document);

//truy xuất các phần tử dom
var form = $("#form");
var tdn = $("#tdn");
var fullName = $("#name");
var password = $("#password");
var etpassword = $("#eTPassword");
var email = $("#email");

form.addEventListener("submit", (e) => {
    //hủy bỏ sự kiện onSubmit khi người dùng click button "đăng ký"
    e.preventDefault();

    //gọi hàm validator()
    validator();
});
function validator() {
    var isCheck = true;
    //Không để trống: mã, họ tên và email
    if (tdn.value == "") {
        errorMessage(tdn, "Không để trống tên đăng nhập");
        isCheck =  false;
    } else {
        successMessage(tdn);
    }
    //Không để trống họ tên  
    if (fullName.value == "") {
        errorMessage(fullName, "Không để trống họ tên ");
        isCheck = false;
    } else {
        successMessage(fullName);
    }
    if (password.value == "") {
        errorMessage(password, "Không để trống mật khẩu ");
        isCheck = false;
    } else {
        successMessage(password);
    }
    if (etpassword.value == "") {
        errorMessage(etpassword, "Không để trống mật khẩu ");
        isCheck = false;
    } 
    else if (etpassword.value != password.value) {
        errorMessage(etpassword, "Mật khẩu nhập lại không đúng ");
        isCheck = false;
    }
    else {
        successMessage(etpassword);
    }
    //Không để trống email và kiểm tra tính hợp lệ
    if (email.value.trim() === '') {
        errorMessage(email, 'Không để trống email');
        isCheck = false;
      } else if (!validateEmail(email.value)) {
        errorMessage(email, 'Email không đúng định dạng');
        isCheck = false;
      } else {
        successMessage(email);
      }
        if(isCheck != true)
                {
                   validator();
                }
                else
                {
                    var notification = document.querySelector('.notification');
                    notification.innerHTML ='Đăng kí thành công';
                    // Thêm lớp "show" để hiển thị thông báo
                    notification.classList.add('show');
                    // Đặt thời gian ẩn thông báo
                    setTimeout(function() {
                    notification.classList.remove('show');
                    }, 3000);
                }
                return isCheck;
}

//set lỗi
function errorMessage(input, message) {
    //lấy ra "<div class=form-group>" dựa vào phần tử input truyền vào trong hàm errorMessage()
    var formGroup = input.parentElement;
    //lấy ra thẻ <span> dựa vào formGroup sử dụng method querySelector() truy xuất đến thẻ <span>
    var span = formGroup.querySelector("span");
    //add class error đã được css sẵn
    formGroup.className = "form-group error";
    //hiển thị lỗi vào thẻ span
    span.innerText =  message;
}

//set thành công
function successMessage(input) {
    //lấy ra "<div class=form-group>" dựa vào phần tử input truyền vào trong hàm successMessage()
    var formGroup = input.parentElement;
    //add class success đã được css sẵn
    formGroup.className = "form-group success";
}   
const product = document.querySelector('.product');

    product.addEventListener('mouseenter', () => {
    product.classList.add('hovered');
}); 

product.addEventListener('mouseleave', () => {
  product.classList.remove('hovered');
});
function validateEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }
