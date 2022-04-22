function arrow(x1, y1, x2, y2) {
    var teta = 0;
    var b = x2 - x1;
    var h = y2 - y1;
    var d = Math.sqrt(b*b + h*h);

    if (x2!=x1) {
        teta = Math.atan(h/b);
    } else {
        teta = (y2>y1) ? HALF_PI : HALF_PI + PI;
    }

    if (x2 < x1) {
        teta = teta + PI;
    }

    line(x1, y1, x1 + d * Math.cos(teta), y1 + d * Math.sin(teta));

    line(x2, y2, x2 - 10 * Math.cos(teta + 0.3), y2 - 10 * Math.sin(teta + 0.3));

    line(x2, y2, x2 - 10 * Math.cos(teta - 0.3), y2 - 10 * Math.sin(teta - 0.3));
}

function arrowArc(x, y, d, start, stop, clockWise = true, arrowOnStart = false, arrowOnStop = true) {
    push(); // Start a new drawing state

    let r=d/2;

    noFill();

    if (clockWise) {
        arc(x, y, d, d, start, stop, OPEN);
    } else {
        arc(x, y, d, d, stop, start, OPEN);
    }

    if (stop != start) {
        if (arrowOnStart && clockWise) {
            arrow(x + r * cos(start), y + r * sin(start), x + r * cos(start-2), y + r * sin(start-2));
        }
        if (arrowOnStart && !clockWise) {
            arrow(x + r * cos(start), y + r * sin(start), x + r * cos(start+2), y + r * sin(start+2));
        }
        if (arrowOnStop && clockWise) {
            arrow(x + r * cos(stop-2), y + r * sin(stop-2), x + r * cos(stop), y + r * sin(stop));
        }
        if (arrowOnStop && !clockWise) {
            arrow(x + r * cos(stop), y + r * sin(stop), x + r * cos(stop-2), y + r * sin(stop-2));
        }
    }

    pop();  // Restore original state
}

function drawGridPoints(centerX, centerY, gridStep) {
    if (gridStep > 0) {
        for (var r = 0; r < width; r = r + gridStep) {
            for (var c = 0; c < height; c = c + gridStep) {
                point(centerX - r, centerY - c);
                point(centerX - r, centerY + c);
                point(centerX + r, centerY - c);
                point(centerX + r, centerY + c);
            }
        }
    }
}

function drawAxes(centerX, centerY) {
    arrow(0, centerY, width, centerY);
    arrow(centerX, 0, centerX, height);
}

function drawMathAxes(centerX, centerY) {
    arrow(0, centerY, width, centerY);
    arrow(centerX, height, centerX, 0);
}

function drawGrid(centerX, centerY, gridStep) {
    if (gridStep > 0) {
        for (var r = 0; r < width; r = r + gridStep) {
            line(centerX + r, 0, centerX + r, height);
            line(centerX - r, 0, centerX - r, height);
        }
        for (var c = 0; c < height; c = c + gridStep) {
            line(0, centerY + c, width, centerY + c);
            line(0, centerY - c, width, centerY - c);
        }
    }
}
