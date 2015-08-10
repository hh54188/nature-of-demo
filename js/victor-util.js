if (!Victor) {
}

;(function (proto) {

	/**
	 * X与Y同时放大N倍
	 * @param  {[Number]} times [放大的倍数]
	 */
	proto.multi = function (times) {
		this.x = this.x * times;
		this.y = this.y * times;
		return this;
	};

	/**
	 * X与Y同时除以N
	 * @param  {[Number]} num [被除数]
	 */
	proto.div = function (num) {
		this.x = this.x / num;
		this.y = this.y / num;
		return this;
	};

	/**
	 * 两个矢量相减，原矢量不变，返回差为新值
	 * @param  {[Object/Victor]} target [被减数]
	 * @return {[Object/Victor]}        [差]
	 */
	proto.sub = function (target) {
		return this.clone().subtract(target);
	};

	proto.addWithLimit = function (targetVictor) {
		var testVictor = this.clone().add(targetVictor);
		if (this.limitLength) {
			testVictor.length() <= this.limitLength;
			this.add(targetVictor);
			return this;
		} 
		// 不存在limit或者超出limit
		else {
			return this;
		}
	};

	proto.limitWithLength = function (targetLength) {
		this.limitLength = targetLength;
		return false;
	}

})(Victor.prototype);