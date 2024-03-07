const $links = document.getElementById('links');
const $name = document.querySelector('h1');
 
const data = 
{
    name: "Cristian Gutierrez",
    nickname: "@CRis",
    description: "...",
    avatar: "...",
    social: [
        {
          name: "platzi",
          url: "https://platzi.com/",
          username: "",
        },
        {
          name: "github",
          url: "https://github.com/",
          username: "",
        },
        {
          name: "instagram",
          url: "https://instagram.com/",
          username: "",
        },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/",
          username: "",
        },
    ],
    links: [
        {
          name: "mentorías",
          url: "https://example.com/",
          color: "fuchsia",
          emoji: "💻",
        },
        {
          name: "blog",
          url: "https://example.com/",
          color: "red",
          emoji: "📖",
        },
        {
          name: "podcast",
          url: "https://example.com/",
          color: "yellow",
          emoji: "💬",
        },
    ],
    footer: "Made with Love on Colomonia",
};
    
    const main = () => {
        let name = document.createTextNode(data?.name);
        let links = data?.links
          .map((link) => {
            return `
          <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
            <a
              class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
              href=${link.url}
              target="_blank"
            >
              ${link.name}
            </a>
            <span>${link.emoji}</span>
          </div>`;
          })
          .join("");
        let newItem = document.createElement("section");
        newItem.innerHTML = links;
        $links.appendChild(newItem);
        $name.appendChild(name);
      };
      
      main();