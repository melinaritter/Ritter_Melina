let devProfile = {
    fullName: "Fox Mulder",
    age: "100",
    profession: "Full-Stack Developer",
    isEmployed: true,
    contact: {
        email: "spooky@fox.com",
        location: "Misiones"
    },
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "React"]
};

// Función que recibe un perfil
function generateProfileIntroduction(profile) {
    // Desestructuración del perfil para mayor claridad
    const { fullName, age, profession, contact, skills } = profile;
    const { location } = contact;
    
    // Asegurarse de que la edad y la ubicación estén presentes
    let introduction = `Hello! My name is ${fullName}. I am a ${profession}.`;

    // Añadir habilidades si están disponibles
    if (skills && skills.length > 0) {
        introduction += ` I work with ${skills.join(", ")}.`;
    }

    // Añadir la ubicación y la edad
    introduction += ` I live in ${location}. I am ${age} years old.`;

    return introduction;
}
 
console.log(generateProfileIntroduction(devProfile));
