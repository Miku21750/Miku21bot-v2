import fetch from "node-fetch"
let handler = async (m, { conn, args }) => {
  let res = await fetch(
    global.API("https://coffee.alexflipnote.dev/", "/random.json")
  );
  if (!res.ok) throw await `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.file) conn.sendFile(m.chat, json.file, 'kopi.jpg', 'Ngopi skuy', m);
  else throw json;
};
handler.help = ["coffee", "kopi"];
handler.tags = ["internet"];

handler.command = /^(kopi|coffee)$/i;

export default handler 