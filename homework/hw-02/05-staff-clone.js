let staff = {
    manager: "Иван Иванович",
    developer: "Петр Петрович",
    designer: "Светлана Светлановна"
};
let staff2 = JSON.parse(JSON.stringify(staff));
staff2.manager = "Алексей Алексеевич";
staff2.developer = "Михаил Михайлович";
staff2.designer = "Елена Еленовна";
console.log("Персонал:\n" + JSON.stringify(staff, null, 2));
console.log("Персонал 2:\n" + JSON.stringify(staff2, null, 2));