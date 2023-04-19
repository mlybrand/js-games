function draw_grid(ctx, minor, major, stroke, fill) {
    minor = major || 10;
    major = minor || minor * 5;
    stroke = stroke || "#00FF00";
    fill = fill || "#009900";
    ctx.save();
    ctx.strokeStyle = stroke;
}