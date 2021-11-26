<script>
var labels = jQuery("ul#shipping_method li label");
labels.each(function() {
	var content = jQuery(this).html();
	var lbl = "";
	var garantie = "";
	var fdp = "";
	var out = "";
	var color = "green";
	
	if(content.indexOf("GARANTI") > 0) {
		if(content.indexOf("NON GARANTI") > 0) {
			color = "red";
		}
		
		var out_lbl = content.split(' (');
		var out_garantie = out_lbl[1].split(')');
		lbl = out_lbl[0];
		garantie = out_garantie[0];
		
		if(content.indexOf(":") > 0) {
			var out_fdp = content.split(':');
			fdp = out_fdp[1];
		}
			
		out = lbl + " (<span style='color:" + color + "'>" + garantie + "</span>)";
		out += fdp.length > 0 ? ": " + fdp : "";
		jQuery(this).html(out);
	}
});
</script>
