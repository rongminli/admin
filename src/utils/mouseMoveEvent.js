/*监听器列表*/
const listeners = [];

/*监听接口*/
const mouseMoveEvent = {
	addListener(id, callBack) {
		listeners.push({
			id,
			callBack
		})
	},
	removeListener(id) {}
}

// 说明：获取鼠标位置
function mousePosition(ev) {
	if (ev.pageX || ev.pageY) {
		return {
			x: ev.pageX - document.body.scrollLeft - document.body.clientLeft,
			y: ev.pageY - document.body.scrollTop - document.body.clientTop
		};
	}
	return {
		x: ev.clientX,
		y: ev.clientY
	};
}



/*获取元素位置信息
box.innerHTML = "top:"+pos.top +"<br/>"+
	"left:"+pos.left +"<br/>"+
	"bottom:"+pos.bottom +"<br/>"+
	"right:"+pos.right +"<br/>"+
	"width:"+pos.width +"<br/>"+
	"height:"+pos.height*/
function getElPosition(id) {
	var box = document.getElementById(id);
	if(!box) return
	var pos = box.getBoundingClientRect();
	return pos;

}

/*鼠标与元素的碰撞测试*/
function collisionTest(mousePos, elPos) {
	return mousePos.x > elPos.left &&
		mousePos.x < elPos.right &&
		mousePos.y > elPos.top &&
		mousePos.y < elPos.bottom
}
/*监听鼠标位置*/
document.onmousemove = mouseMove;

function mouseMove(ev) {
	ev = ev || window.event;
	var mousePos = mousePosition(ev);

	listeners.forEach((listener) => {
		var el = document.getElementById(listener.id);
		if(!el) return
		const elPos = el.getBoundingClientRect();  	//获取坐标
		if (collisionTest(mousePos, elPos)) { 		//碰撞测试
			listener.callBack(mousePos, elPos, el);
		}
	})
}

export default mouseMoveEvent
