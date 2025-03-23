uniform float u_time;

vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    uv = (uv + vec2(u_time) * u_speed) * vec2(u_aspect, 1.0);
}