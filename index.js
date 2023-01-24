class TicketManager {
    constructor() {
      this.eventos = [];
      this.precioBaseDeGanancia = 0.15;
      this.id = 0;
    }

    getEventos() {
      return this.eventos;
    }
    
    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
      this.eventos.push({
        id: this.id++,
        nombre: nombre,
        lugar: lugar,
        precio: precio + (precio * this.precioBaseDeGanancia),
        capacidad: capacidad,
        fecha: fecha,
        participantes: []
      });
    }
    
    agregarUsuario(eventoId, usuarioId) {
      let evento = this.eventos.find(evento => evento.id === eventoId);
      if (!evento) {
        return;
      }
      if (evento.participantes.indexOf(usuarioId) === -1) {
        evento.participantes.push(usuarioId);
      }
    }
    
    ponerEventoEnGira(eventoId, nuevaLocalidad, nuevaFecha) {
      let evento = this.eventos.find(evento => evento.id === eventoId);
      if (!evento) {
        return;
      }
      this.eventos.push({
        id: this.id++,
        nombre: evento.nombre,
        lugar: nuevaLocalidad,
        precio: evento.precio,
        capacidad: evento.capacidad,
        fecha: nuevaFecha,
        participantes: []
      });
    }
  }
