// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// 获取所有的like-glyph类里的元素并赋值给heart
const hearts = document.querySelectorAll('.like-glyph')

//遍历每个heart元素
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    //添加event listener
    if (heart.classList.contains('activated-heart')) {
      heart.textContent = EMPTY_HEART
      heart.classList.remove('activated-heart')
      //如果心是满心，切换回空心并且移除activated-heart类
    } else {
      mimicServerCall()
        //模拟服务器请求
        .then(() => {
          //服务器返回成功状态
          heart.textContent = FULL_HEART
          heart.classList.add('activated-heart')
        })
        .catch(() => {
          //服务器返回失败状态
          const modal = document.getElementById('modal')
          const modalMessage = document.getElementById('modal-message')
          //移除hidden类 显示错误状态框
          modal.classList.remove('hidden')
          //显示错误消息
          modalMessage.textContent = 'server error'
          //设计定时器，三秒后隐藏添加hidden类，隐藏错误状态框
          setTimeout(() => {
            modal.classList.add('hidden')
          }, 3000)
        })
    }
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
