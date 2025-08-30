export async function getHello() {
  try {
    const res = await fetch("/api/hello"); // graças ao proxy não precisa http://localhost:5000
    if (!res.ok) throw new Error("Erro na resposta do servidor");
    return await res.json();
  } catch (error) {
    console.error("Erro ao buscar API:", error);
    return { message: "Erro ao conectar ao backend ❌" };
  }
}
