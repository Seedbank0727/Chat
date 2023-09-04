import React from 'react'

function Chat() {
  return (
    <div>
    <input type="text" placeholder="보낼 메세지를 입력하세요." class="content"/>
    <button type="button" value="전송" class="sendBtn" onclick="sendMsg()">전송</button>
<div>
    <span>메세지</span>
    <div class="msgArea"></div>
</div>
</div>

  )
}

export default Chat;