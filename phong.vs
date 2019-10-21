
#version 330 core
layout (location = 0) in vec3 position;
layout (location = 1) in vec3 normal;

out vec3 Normal;
out vec3 FragPos;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
	gl_Position = projection * view * model * vec4(position, 1.0); //Gets vertex position

	//Forward normal vector and fragment position to the fragment shader
	Normal = normal;
	FragPos = vec3(view * model * vec4(position, 1.0));

} 
