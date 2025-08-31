precision highp float;
uniform sampler2D velocity;
varying vec2 uv;

void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    vec3 col = vec3(1.0);
    float len = length(vel);
    vel = vel * 0.5 + 0.5;

    vec3 color = vec3(vel.x, vel.y, 1.0);
    color = mix(col, color, len); // 元のmix
    color = mix(col, color, 0.3); // 白との追加ブレンド（薄く）

    gl_FragColor = vec4(color, 1.0);
}