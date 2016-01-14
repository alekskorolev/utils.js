adoc(
    'getPercentColor(50)',
    'get color from FF0000 to 00FF00 by percent'
);

window.getPercentColor = (percent) => {
    var percent = Math.floor(255 * percent / 100),
        R = Number(255 - percent).toString(16),
        G = Number(percent).toString(16),
        RGP;

    if (!(percent + 1) || percent < 0 || percent > 255) {
        return false;
    }
    R = R.length === 1 ? "0" + R : R;
    G = G.length === 1 ? "0" + G : G;
    RGP = (R + G + "00").toUpperCase();

    return RGP;
}
