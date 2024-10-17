
// Criando um usuário
const usuario1 = new Usuario(1, "João Silva", "11999999999", "123.456.789-10");

// Criando uma localização
const localizacao1 = new Localizacao(1, "Rua Exemplo, 123", "São Paulo", "SP", "01000-000");

// Registrando uma chamada para a ambulância
const chamadaAmbulancia1 = new ChamadaAmbulancia(1, usuario1, localizacao1, "10 minutos", "Atendida");

// Registrando uma chamada para os bombeiros
const chamadaBombeiros1 = new ChamadaBombeiros(2, usuario1, localizacao1, "8 minutos", "Atendida");

// Registrando uma chamada para a polícia
const chamadaPolicia1 = new ChamadaPolicia(3, usuario1, localizacao1, "5 minutos", "Atendida");
