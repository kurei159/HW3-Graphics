
#version 330 core
out vec4 color;

in vec3 FragPos;  
in vec3 Normal;  
  
uniform vec3 lightPos; 
uniform vec3 viewPos;
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
    //Ambient Lighting
    float ambientStrength = 0.1; //Ambient Intensity
    vec3 ambient = ambientStrength * lightColor; //Light Colour * Ambient Intensity Value
  	
    //Diffuse Light
    vec3 norm = normalize(Normal); //Normalize the obtained Normal Vector
    vec3 lightDir = normalize(lightPos - FragPos); //Get Direction between light source and fragment pos
    float diff = max(dot(norm, lightDir), 0.0); //Get Diffuse Impact
    vec3 diffuse = diff * lightColor; //Multiply the diffuse impact and colour to get diffuse component
    
    //Specular Lighting
    float specularStrength = 0.5; //Specular Intensity
    vec3 viewDir = normalize(viewPos - FragPos); //Get View Directional Vector, between View Position and Fragment Position
    vec3 reflectDir = reflect(-lightDir, norm);  //Reflect Vector Along the Normal
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32); //Get Specular Component, Raising to the power of 32, which is the shininess value
    vec3 specular = specularStrength * spec * lightColor;  //Multiply Intensity, Specular Component, and Light Colour to get specular light with the correct light colour
        
    vec3 result = (ambient + diffuse + specular) * objectColor; //Add All Lighting = Phong Lighting

	color = vec4(result, 1.0); //End Result To Fragment Colour
} 
