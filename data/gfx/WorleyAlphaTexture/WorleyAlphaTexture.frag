uniform float width;
uniform float height;
uniform float t;
uniform sampler2D texture;

#include "../lygia/generative/worley.glsl"

void main() {
    vec2 u_resolution = vec2(width, height);
    
    // Normalized pixel coordinates (from 0 to 1)
    vec4 color = vec4(0., 0., 0., 1.);
    vec2 uv = gl_FragCoord.xy / u_resolution;
    
    float noise3d = worley(vec3(uv * 5., t));
    
    color.rgb = texture2D(texture, uv).rgb;
    color.a -= noise3d * 4.;
    
    gl_FragColor = color;
}