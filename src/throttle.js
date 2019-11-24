function throttle(func, threshhold = 250) {
	var timer,
		last = null
	return function() {
		var context = this
		var args = arguments
		var now = +new Date()
		// 重新計時
		if (last && now < last + threshhold) {
			clearTimeout(timer)
			timer = setTimeout(function() {
				last = now
				func.apply(context, args)
			}, threshhold)
			// 開始
		} else {
			last = now
			func.apply(context, args)
		}
	}
}

export default throttle
