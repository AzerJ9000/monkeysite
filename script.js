function showFact() {
    const facts = [
        "Monkeys are primates.",
        "There are over 260 species of monkeys.",
        "Some monkeys can use tools!",
        "Monkeys live in trees, grasslands, mountains, and forests.",
        "A group of monkeys is called a troop."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("factDisplay").textContent = facts[randomIndex];
}
