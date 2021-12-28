$(document).ready( function () {
	requestUpdate();
        $('#power').on("click",function () {
		$.ajax({
        		url: "/POWER",
        		type: "POST",
        		success: requestUpdate,
        		error: ajaxFailed
    		});
	});
        $('#prox').on("click",function () {
		$.ajax({
        		url: "/PROX",
        		type: "POST",
        		success: requestUpdate,
        		error: ajaxFailed
    		});
	});
        $('#light').on("click",function () {
		$.ajax({
        		url: "/LIGHT_SENSOR",
        		type: "POST",
        		success: requestUpdate,
        		error: ajaxFailed
    		});
	});
});

function requestUpdate(){
   $.ajax({
        url: "/API",
        type: "POST",
        dataType: "json",
        success: statusUpdate,
        error: ajaxFailed
    });

}
function statusUpdate(json) {
	let power = $("#power");
	let prox = $("#prox"), light = $("#light");
    	console.log(json);
	if(json.state == "on")
		power.attr("src","/static/res/on.png")
	else
		power.attr("src","/static/res/off.png")
	if(json.prox == "on")
		prox.removeClass("red").addClass("green")
	else
		prox.removeClass("green").addClass("red")
	if(json.light == "on")
		light.removeClass("red").addClass("green")
	else
		light.removeClass("green").addClass("red")
}
function ajaxFailed(json) {
    console.log("failed");
}

//json structure: light:"on/off" lum:"on/off" light:"on/off"
