const app = new Vue({
  el: "#llamadas",
  data: {
    dev: false,
    segmento: "",
    seComunica: "",
    cuenta: "",
    descripcion: "",
    folio: "",
    notas: "",
    listaDeLlamadas: [],
    listaMasivas: [],
  },

  computed: {},

  created: function () {},

  methods: {
    plantillaInformativa: function () {
      var info = "";

      info += "Segmento: " + this.segmento + "<br>";
      info += "Se comunica: " + this.seComunica + "<br>";
      info += "Cuenta: " + this.cuenta + "<br>";
      info += "Descripcion: " + this.descripcion + "<br>";

      Swal.fire({
        title: "Plantilla informativa",
        html: info,
      });

      var info2 = "";

      info2 += "Segmento: " + this.segmento + "\n";
      info2 += "Se comunica: " + this.seComunica + "\n";
      info2 += "Cuenta: " + this.cuenta + "\n";
      info2 += "Descripcion: " + this.descripcion + "\n";

      /*navigator.clipboard.writeText(info2)
			.then(() => {
			console.log("Texto copiado a portapapeles...")
			});*/

      var copyText = document.getElementById("MiCopia");
      copyText.style.display = "block";
      copyText.value = info2;
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      copyText.style.display = "none";
    },

    plantillaReubicacionONT: function () {
      var info = "";

      info += "Segmento: " + this.segmento + "\n";
      info += "Nombre de quien se comunica: " + this.seComunica + "\n";
      info += "Nombre del responsable del seguimiento: " + "\n";
      info += "Telefono fijo: " + "\n";
      info += "Telefono celular: " + "\n";
      info += "Correo electronico: " + "\n";
      info += "Horario de atencion: " + "\n";
      info +=
        "Descripcion: Cliente solicita reubicacion de su ONT/CPE en su mismo domicilio" +
        "\n";
      info += "Direccion de instalacion: " + "\n";
      info += "Distancia aproximada de la reubicacion (m): " + "\n";

      this.descripcion += "\n" + info;
    },

    plantillaCambioDomic: function () {
      var info = "";

      info += "Segmento: " + this.segmento + "\n";
      info += "Nombre de quien se comunica: " + this.seComunica + "\n";
      info += "Nombre del responsable del seguimiento: " + "\n";
      info += "Telefono fijo: " + "\n";
      info += "Telefono celular: " + "\n";
      info += "Correo electronico: " + "\n";
      info += "Horario de atencion: " + "\n";
      info +=
        "Descripcion: Cliente solicita cambio de domicilio de instalacion de su servicio" +
        "\n";
      info += "Direccion de instalacion: " + "\n";
      info += "Direccion de cambio: " + "\n";
      info += "Entre calles del nuevo domicilio/Referencias fisicas: " + "\n";
      info += "Cuenta con las adecuaciones correspondientes: " + "\n";

      this.descripcion += "\n" + info;
    },

    plantillaEnvioFactura: function () {
      var info =
        "Cliente solicita se reenvie su factura, se envia a correo registrado <CORREO>, cliente confirma de recibido";

      this.descripcion += "\n" + info;
    },

    plantillaAtencionCARE: function () {
      var info =
        "Cliente reporta <REPORTE>, se monitorea ONT, se detecta activa, con parámetros correctos, potencia en rango(), sin VLAN de morosidad(VLAN Datos, VLAN Voz), se genera folio en atención a cliente";

      this.descripcion += "\n" + info;
    },

    plantillaAtencionCAREMW: function () {
      var info =
        "Cliente reporta <REPORTE>, se intenta monitorear CPE en iMaster, se detecta online/offline, se genera folio en atención a cliente";

      this.descripcion += "\n" + info;
    },

    limpiarForm: function () {
      this.seComunica = "";
      this.cuenta = "";
      this.segmento = "";
      this.descripcion = "";
      this.folio = "";
    },

    limpiarTodo: function () {
      this.seComunica = "";
      this.cuenta = "";
      this.segmento = "";
      this.descripcion = "";
      this.folio = "";
      this.notas = "";
    },

    plantillaMesaDeAyuda: function () {
      var info = "";

      info += "Quien se comunica: " + this.seComunica + "\n";
      info += "Descripcion del incidente: " + this.descripcion + "\n";
      info += "Numero de la cuenta y/o Folio Tracker: " + this.cuenta + "\n";
      info += "Nombre del cliente: " + "\n";
      info += "Segmento: " + this.segmento + "\n";
      info += "Numero de serie de la ONT: " + "\n";
      info += "Posicion (F/S/P/ONT ID): " + "\n";
      info += "Plan: " + "\n";
      info += "Modelo de Equipo: " + "\n";
      info += "Megas de subida/bajada: " + "\n";
      info += "Modo de la ONT (Router o Bridge): " + "\n";
      info += "Tipo de telefonia (Analoga o Digital): " + "\n";
      info += "DNS (Si incluye añadirlos a 10 digitos): " + "\n";
      info +=
        "Servicio de Internet (Especificar si es DHCP publico, privado o fijo): " +
        "\n";
      info +=
        "Si el cliente adquirio una IP Fija, proporcionar los siguientes datos:" +
        "\n";
      info += "IP Fija: " + "\n";
      info += "Mascara: " + "\n";
      info += "Gateway: " + "\n";
      info += " " + "\n";
      info += "VLANs de Servicio Datos: " + "\n";
      info += "VLANs de Usuario Datos: " + "\n";
      info += "VLANs de Servicio Voz: " + "\n";
      info += "VLANs de Usuario Voz: " + "\n";
      info += "Nota: Especificar si las VLAN van en TAG o UNTAG: " + "\n";
      info += "Nombre de contacto: " + "\n";
      info += "Telefono Celular:" + "\n";
      info += "Telefono Fijo: " + "\n";
      info += "Horarios de atencion (telefono): " + "\n";
      info += "Horarios de atencion en sitio:" + "\n";

      this.descripcion += "\n" + info;
    },

    plantillaGeneralDatos: function () {
      var info = "";

      info += "Cuenta: " + this.cuenta + "\n";
      info += "Razon Social | Titular de la cuenta: " + "\n";
      info += "Segmento: " + this.segmento + "\n";
      info += "Direccion de instalacion: " + "\n";
      info += "Referencias del domicilio: " + "\n";
      info += "\n";
      info += "Plan contratado: " + "\n";
      info += "DNs Facturando: " + "\n";
      info += "Balance en General: " + "\n";
      info += "\n";
      info += "\n";
      info += "Topologia: " + "\n";
      info += "Marca y modelo: " + "\n";
      info += "SN: " + "\n";
      info += "Modelo de la ONT: " + "\n";
      info += "Modo de operacion de ONT: " + "\n";
      info += "VLAN DATOS: " + "\n";
      info += "IP fija o dinamica: " + "\n";
      info += "Parametros de IP fija: " + "\n";
      info += "\n";
      info += "OLT: " + "\n";
      info += "Posicion de la ONT: " + "\n";
      info += "Ticket Reincidente: " + "\n";
      info += "Valores de potencia en FO: " + "\n";
      info += "Estado de los LEDs: " + "\n";
      info += "\n";
      info += "\n";
      info += "Falla exacta | Ayuda tecnica: " + "\n";
      info += "Folio FPE: " + "\n";
      info += "\n";
      info += "Descripcion: " + "\n";
      info += "\n";
      info += "\n";
      info += "Persona que reporto el servicio: " + this.seComunica + "\n";
      info += "Contacto para seguimiento: " + "\n";
      info += "Numeros de contacto: " + "\n";
      info += "Celular: " + "\n";
      info += "Fijo: " + "\n";
      info += "\n";
      info += "Horario de atencion para seguimiento via telefonica: " + "\n";
      info += "Horario de atencion para seguimiento en sitio: " + "\n";

      this.descripcion += "\n" + info;
    },

    plantillaGeneralVoz: function () {
      var info = "";

      info += "Cuenta: " + this.cuenta + "\n";
      info += "Razon Social | Titular de la cuenta: " + "\n";
      info += "Segmento: " + this.segmento + "\n";
      info += "Direccion de instalacion: " + "\n";
      info += "Referencias del domicilio: " + "\n";
      info += "\n";
      info += "Plan contratado: " + "\n";
      info += "DNs Facturando: " + "\n";
      info += "Balance en General: " + "\n";
      info += "\n";
      info += "\n";
      info += "Topologia: " + "\n";
      info += "Marca y modelo: " + "\n";
      info += "SN: " + "\n";
      info += "Modelo de la ONT: " + "\n";
      info += "Modo de operacion de ONT: " + "\n";
      info += "VLAN Voz: " + "\n";
      info += "IP fija o dinamica: " + "\n";
      info += "Parametros de IP fija: " + "\n";
      info += "\n";
      info += "OLT: " + "\n";
      info += "Posicion de la ONT: " + "\n";
      info += "Ticket Reincidente: " + "\n";
      info += "Valores de potencia en FO: " + "\n";
      info += "Estado de los LEDs: " + "\n";
      info += "\n";
      info += "\n";
      info += "Falla exacta | Ayuda tecnica: " + "\n";
      info += "Folio FPE: " + "\n";
      info += "\n";
      info += "Descripcion: " + "\n";
      info += "\n";
      info += "\n";
      info += "Persona que reporto el servicio: " + this.seComunica + "\n";
      info += "Contacto para seguimiento: " + "\n";
      info += "Numeros de contacto: " + "\n";
      info += "Celular: " + "\n";
      info += "Fijo: " + "\n";
      info += "\n";
      info += "Horario de atencion para seguimiento via telefonica: " + "\n";
      info += "Horario de atencion para seguimiento en sitio: " + "\n";

      this.descripcion += "\n" + info;
    },

    plantillaFortinet: function () {
      var info = "";
      info +=
        this.cuenta +
        "/Top o no Top 5k /Folio ID o paquetizada/Sucursal/ Folio SD: xxx/ Segmento " +
        this.segmento +
        "/ RS/solicitud / Folio Dashboard:\n";
      info += "\n";
      info += "Numero de cuenta: " + this.cuenta + "\n";
      info += "Razon Social: " + "\n";
      info += "Segmento: " + this.segmento + "\n";
      info += "\n";
      info +=
        "Si el cliente cuenta con mas de un equipo FW o TotalSec: " + "\n";
      info += "IP publica del equipo: " + "\n";
      info += "Tipo: problema /Bloqueo/ Configuracion" + "\n";
      info += "Descripcion: " + "\n";
      info += "IP de origen: " + "\n";
      info += "IP de destino: " + "\n";
      info += "Servicio: (puerto y servicios)" + "\n";
      info += "Aplicacion: (En caso de ser un aplicativo cual es)" + "\n";
      info += "url: (url del sitio web o dominio de ser el caso)" + "\n";
      info +=
        "Ruteo / Segmentos / VLAN: (gw de ruta, segmento de IP con mascara, ID de VLAN, datos relevantes a configurar)" +
        "\n";
      info += "No. de serie de equipo FW: " + "\n";
      info += "\n";
      info += "Persona que reporto el servicio: " + this.seComunica + "\n";
      info += "Contacto para seguimiento: " + "\n";
      info += "Numeros de contacto: " + "\n";
      info += "Celular: " + "\n";
      info += "Fijo: " + "\n";
      info += "Correo electronico: " + "\n";
      info += "Horario de atencion para seguimiento via telefonica: " + "\n";
      info += "Horario de atencion para seguimiento en sitio: " + "\n";

      this.descripcion += "\n" + info;
    },

    formatearTexto: function (cadena) {
      if (cadena.trim() == "") {
        Swal.fire("Texto vacio", "Escribe la plantilla a formatear", "warning");
      } else {
        cadena = cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return cadena;
      }
    },

    plantillaPiloto2: function () {
      var info = "";
      if (this.folio.trim() == "") {
        Swal.fire("Sin folio", "No se ha ingresado folio", "warning");
      } else {
        var cadena = this.descripcion;
        cadena = this.formatearTexto(cadena);
        var arr1 = cadena.split("\n");
        //console.log(arr1);

        arrRazonSoc = arr1.filter((each) =>
          each.includes("Razon social/Titular :")
        );
        arrFalla = arr1.filter((each) => each.includes("Falla / Solicitud  :"));
        //console.log(arrRazonSoc);

        var razonSocial = arrRazonSoc[0].substring(22);
        //console.log(razonSocial);

        var falla = arrFalla[0].substring(20);
        //console.log(falla);
        var scriptPiloto =
          "<h3>Sr(a). " +
          this.seComunica +
          ", le comento que escalaré su caso al área de Soporte Avanzado para la revisión de su servicio, en caso de que sea necesario realizar pruebas en línea se estarán comunicando con usted.</h3>";
        //info += 'CUENTA: ' + this.cuenta + '\n';
        //info += 'RS: ' + razonSocial + '\n';
        info += "FOLIO: " + this.folio + "\n";
        info += "FALLA: " + falla + "\n";

        Swal.fire({
          html: scriptPiloto,
          confirmButtonText: "Aceptar",
        }).then((result) => {
          navigator.clipboard.writeText(info).then(() => {
            Swal.fire(info.trim());
          });
        });
      }
    },

    plantillaPiloto: function () {
      var info = "";
      if (this.folio.trim() == "") {
        Swal.fire("Sin folio", "No se ha ingresado folio", "warning");
      } else {
        Swal.fire({
          title: "Datos adicionales",
          html: `<input type="text" id="rs" class="swal2-input" placeholder="Razon social">
				  <input type="text" id="falla" class="swal2-input" placeholder="Falla">`,
          confirmButtonText: "Crear Plantilla",
          focusConfirm: false,
          preConfirm: () => {
            const rasoc = Swal.getPopup().querySelector("#rs").value;
            const falla = Swal.getPopup().querySelector("#falla").value;
            if (!rasoc || !falla) {
              Swal.showValidationMessage("Llena los datos solicitados");
            }
            return { rasoc: rasoc, falla: falla };
          },
        }).then((result) => {
          info += "CUENTA: " + this.cuenta + "\n";
          info += "RS: " + result.value.rasoc + "\n";
          info += "FOLIO: " + this.folio + "\n";
          info += "FALLA: " + result.value.falla + "\n";

          navigator.clipboard.writeText(info).then(() => {
            Swal.fire(info.trim());
          });

          this.notas +=
            "\n" +
            "Sr(a). " +
            this.seComunica +
            ", le comento que escalaré su caso al área de Soporte Avanzado para la revisión de su servicio, en caso de que sea necesario realizar pruebas en línea se estarán comunicando con usted.";
        });
      }
    },

    plantillaLOS: function () {
      var info =
        "Cliente reporta no tener servicio, confirma led LOS en rojo, cableado en buen estado, sin FM, posible corte de fibra optica";

      this.descripcion += "\n" + info;
    },

    scriptDeCalidad: function () {
      var info =
        "<h3>Por motivos de calidad, esta llamada no puede continuar en línea, por lo que será transferida a extensión de supervisor para ser finalizada. Gracias por haberse comunicado a Totalplay Empresarial, le atendió <EJECUTIVO>, que tenga un excelente día</h3>";

      Swal.fire({
        title: "Script de Calidad",
        icon: "success",
        html: info,
      });
    },

    scriptDeMasiva: function () {
      var info =
        "<h3>Le informo que tenemos una afectacion en su zona y esta siendo atendido por nuestras areas de ingenieria quienes estaran implementando acciones correctivas en el transcurso del día, le brindo el folio xxxxxx para su seguimiento. Totalplay Empresarial le ofrece una disculpa</h3>";

      Swal.fire({
        title: "Script de Masiva",
        icon: "success",
        html: info,
      });
    },

    scriptSinHerramientas: function () {
      var info =
        "<h3>Señor , en este momento estamos llevando a cabo una actualización en nuestro sistema, por lo que no me es posible atender su petición, agradecemos que se pueda comunicar más tarde para brindarle la atención necesaria; Totalplay Unidad Empresarial le ofrece una disculpa por los inconvenientes generados.</h3>";

      Swal.fire({
        title: "Script de Masiva",
        icon: "success",
        html: info,
      });
    },

    plantillaU2000: function () {
      var info =
        "Cliente reporta no tener servicio, no se detecta FM, se monitorea equipo en U2000 y se detecta alarma de posible corte de fibra optica";

      this.descripcion += "\n" + info;
    },

    plantillaMasivaSM: async function () {
      const { value: text } = await Swal.fire({
        input: "textarea",
        inputLabel: "Masiva",
        inputPlaceholder: "Introduce el folio de la masiva",
        showCancelButton: true,
      });

      if (text) {
        var info = "";
        info +=
          this.cuenta +
          "/Top o no Top 5k /Folio ID o paquetizada/ Sucursal/Segmento " +
          this.segmento +
          "/ RS/Falla Masiva" +
          "\n\n";
        info += "Folio Falla Masiva: " + text + "\n";
        info += "Sr. " + this.seComunica + "\n";
        info +=
          "Descripcion: Cliente reporta no tener servicio, se detecta afectacion en la zona\n";
        info += "Persona que se comunica: " + this.seComunica + "\n";
        info += "Contacto en sitio: \n";
        info += "Cel: \n";
        info += "Tel. ext: \n";
        info += "Horario: \n";
        info += "Correo electronico: \n";

        this.descripcion += "\n" + info;
      }
    },

    plantillaMasiva: async function () {
      const { value: text } = await Swal.fire({
        input: "textarea",
        inputLabel: "Masiva",
        inputPlaceholder: "Introduce el folio de la masiva",
        showCancelButton: true,
      });

      if (text) {
        var info = "";

        info += "Folio padre: " + text + "\n";
        info += "Titulo de problematica: Masiva\n";
        info += "Cuenta: " + this.cuenta + "\n";
        info += "Razon Social: \n";
        info += "Segmento: " + this.segmento + "\n";
        info += "Nombre de la persona que reporta: " + this.seComunica + "\n";
        info +=
          "Descripcion: Cliente reporta no tener servicio, se detecta afectacion en la zona. \n";
        info += "Persona para contacto: \n";
        info += "Tel: \n";
        info += "Horario de atencion: \n";
        info += "Dias de atencion: \n";

        this.descripcion += "\n" + info;
      }
    },

    plantillaMasivaV2: async function () {
      Swal.fire({
        title: "Seleccione la opcion que requiera",
        showDenyButton: true,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "Introducir masiva manualmente",
        denyButtonText: "Seleccionar masiva de la lista",
      }).then((result) => {
        if (result.isConfirmed) {
          this.agregarMasivaManual();
        }

        if (result.isDenied) {
          Swal.fire("En desarrollo", "masiva de la lista", "info");
        }
      });
    },

    plantillaTransferencia: function () {
      var info =
        "Cliente reporta <REPORTE>, se transfiere a area correcta por segmento con <EJECUTIVO>, cliente confirma numero de contacto <NUMERO>";

      this.descripcion += "\n" + info;
    },

    plantillaIncidenciaNoEscalada: function () {
      var info = "";

      info += "Folio: " + this.folio + "\n";
      info += "Estatus: \n";
      info += "Cuenta: " + this.cuenta + "\n";
      info += "Razón Social: \n";
      info += "Segmento: " + this.segmento + "\n";
      info += "Paquete o TFE: \n";
      info += "Top 5k Si/No: \n";
      info += "Descripción de la incidencia: \n";
      info += "\n";
      info += "Tipificación: FALLA / ATENCIÓN Care Empresarial / DATOS \n";
      info +=
        "Diagnostico : Se realiza llamada con Sr./Srita. " +
        this.seComunica +
        " solicitando realizar pruebas con red aislada y ";

      this.descripcion += "\n" + info;
    },

    plantillaIncidenciaEscalada: function () {
      var info = "";

      info += "Folio: " + this.folio + "\n";
      info += "\n";
      info += "Estatus: \n";
      info += "Cuenta: " + this.cuenta + "\n";
      info += "Razón Social: \n";
      info += "Segmento: " + this.segmento + "\n";
      info += "Paquete o TFE: \n";
      info += "Top 5k Si/No: \n";
      info += "Descripción de la incidencia: \n";
      info += "\n";
      info += "Se escala a: \n";
      info += "\n";
      info += "Tipificación: FALLA / ATENCIÓN Care Empresarial / DATOS \n";
      info +=
        "Diagnostico : Se realiza llamada con Sr./Srita. " +
        this.seComunica +
        " solicitando realizar pruebas con red aislada y ";

      this.descripcion += "\n" + info;
    },

    plantillaLlenadoPiloto: function () {
      var info =
        "Cliente reporta <REPORTE>, se monitorea la ONT, se ve activa, con parámetros correctos, potencia en rango<POTENCIA>, sin VLAN de morosidad<VLANs>, se genera folio en atención a cliente";

      this.descripcion += "\n" + info;
    },

    guardarLlamada: function () {
      if (this.folio.trim() == "") {
        Swal.fire("Falta informacion", "Captura el folio generado", "warning");
      } else {
        var hoy = new Date();
        var hora, minuto, segundo;
        if (hoy.getHours() < 10) {
          hora = "0" + hoy.getHours();
        } else {
          hora = hoy.getHours();
        }
        if (hoy.getMinutes() < 10) {
          minuto = "0" + hoy.getMinutes();
        } else {
          minuto = hoy.getMinutes();
        }
        if (hoy.getSeconds() < 10) {
          segundo = "0" + hoy.getSeconds();
        } else {
          segundo = hoy.getSeconds();
        }
        var horaCompleta = hora + ":" + minuto + ":" + segundo;
        var llamada = {};
        llamada.separador = "===========================================";
        llamada.segmento = this.segmento.trim();
        llamada.seComunica = this.seComunica.trim();
        llamada.cuenta = this.cuenta.trim();
        llamada.descripcion = this.descripcion.trim();
        llamada.folio = this.folio.trim();
        llamada.hora = horaCompleta;

        this.listaDeLlamadas.push(llamada);

        this.segmento = "";
        this.seComunica = "";
        this.cuenta = "";
        this.descripcion = "";
        this.folio = "";

        Swal.fire("Llamada guardada", "", "success");
      }
    },

    correosSolicitud: function (areaT) {
      var info = "";
      info +=
        "jillescas@tkmcsc.com; kpreciat@tkmcsc.com; ftequipanecatl@tkmcsc.com; carlos.rueda@nachnac.com; jarteagaa@nachnac.com; angel.moraleslop@tkmcsc.com; rene.cedillo@tkmcsc.com; cesar.rosales@totalplay.com.mx; julian.hernandez@totalplay.com.mx;khernandezm@totalplay.com.mx; dperezy@totalplay.com.mx; sandra.martinezm@totalplay.com.mx; ichavez@totalplay.com.mx; rarias@totalplay.com.mx";

      if (areaT == 1) {
        info += "; soc@totalsec.com.mx";
      }

      if (areaT == 2) {
        info += "; soporte-voip@onuriscp.com";
      }

      if (areaT == 3) {
        info += "; Optimizacion_Soporte_RC@onuriscp.com";
      }

      if (areaT == 4) {
        info += "; soportegpon@onuriscp.com";
      }

      if (areaT == 5) {
        info += "; soportednsfw@totalplay.com.mx";
      }

      navigator.clipboard.writeText(info).then(() => {
        Swal.fire("Copiado a portapapeles", info, "success");
      });
    },

    recupUltimaInterac: function () {
      var ultimaLlamada = this.listaDeLlamadas[this.listaDeLlamadas.length - 1];
      this.seComunica = ultimaLlamada.seComunica;
      this.cuenta = ultimaLlamada.cuenta;
      this.segmento = ultimaLlamada.segmento;
      this.descripcion = ultimaLlamada.descripcion;
    },

    agregarMasiva: async function () {
      const { value: datosMasiva } = await Swal.fire({
        input: "textarea",
        inputLabel: "Datos de la masiva",
        inputPlaceholder:
          "Informacion sobre la falla masiva proporcionada por supervision",
        showCancelButton: true,
      });

      if (datosMasiva) {
        var masiva = {};
        masiva.datos = datosMasiva;

        this.listaMasivas.push(masiva);
        this.actualizarLocalStorage(this.listaDeLlamadas, this.listaMasivas);
        Swal.fire(
          "Guardado",
          "Informacion de Masiva guardada con exito",
          "success"
        );
      }
    },

    agregarMasiva2: async function () {
      Swal.fire({
        title: "Agregar Falla masiva",
        html: `<input type="text" id="fsd" class="swal2-input" placeholder="Folio SD">
				  <input type="text" id="fsf" class="swal2-input" placeholder="Folio SF">
				  <input type="text" id="ciudad" class="swal2-input" placeholder="Ciudad o Estado de la Masiva">
				  <select name="tipoMasiva" id="tipoMasiva" class="swal2-input">
					  <option value="Corte de Fibra">Corte de Fibra</option>
					  <option value="Intermitencia">Intermitencia</option>
					  <option value="IPTV">IPTV</option>
					  <option value="Navegacion Lenta">Navegacion Lenta</option>
					  <option value="Perdida de Gestion">Perdida de Gestion</option>
					  <option value="Sin navegacion">Sin navegacion</option>
					  <option value="Sin servicio de voz">Sin servicio de voz</option>
				  </select>`,
        confirmButtonText: "Agregar",
        focusConfirm: false,
        preConfirm: () => {
          var fsd = Swal.getPopup().querySelector("#fsd").value;
          var fsf = Swal.getPopup().querySelector("#fsf").value;
          const tipo = Swal.getPopup().querySelector("#tipoMasiva").value;
          const ciudad = Swal.getPopup().querySelector("#ciudad").value;
          if (!fsd && !fsf) {
            Swal.showValidationMessage("Debes introducir al menos un folio");
          }

          if (!fsd) {
            fsd = "N/A";
          }

          if (!fsf) {
            fsf = "N/A";
          }

          if (!tipo) {
            Swal.showValidationMessage("Agrega que tipo de masiva es");
          }

          if (!ciudad) {
            Swal.showValidationMessage(
              "Agrega a que estado o ciudad pertenece la masiva"
            );
          }

          return { fsd: fsd, fsf: fsf, tipo: tipo, ciudad: ciudad };
        },
      }).then((result) => {
        var masiva = {};
        masiva.folioSd = result.value.fsd;
        masiva.folioSf = result.value.fsf;
        masiva.tipo = result.value.tipo;
        masiva.ciudad = result.value.ciudad;

        this.listaMasivas.push(masiva);

        this.actualizarLocalStorage(this.listaDeLlamadas, this.listaMasivas);
        Swal.fire(
          "Guardado",
          "Informacion de Masiva guardada con exito",
          "success"
        );
      });
    },

    agregarMasivaManual: async function () {
      Swal.fire({
        title: "Agregar Falla masiva",
        html: `<input type="text" id="fsd" class="swal2-input" placeholder="Salesforce = XXXX Service Desk: xxxx">
				  
				  `,
        confirmButtonText: "Agregar",
        focusConfirm: false,
        preConfirm: () => {
          const fsd = Swal.getPopup().querySelector("#fsd").value;

          if (!fsd) {
            Swal.showValidationMessage("Introduce la masiva obtenida UXNOC");
          }

          return { fsd: fsd };
        },
      }).then((result) => {
        var info = "";

        info += "Folio padre: " + result.value.fsd + "\n";
        info += "Titulo de problematica: Masiva\n";
        info += "Cuenta: " + this.cuenta + "\n";
        info += "Razon Social: \n";
        info += "Segmento: " + this.segmento + "\n";
        info += "Nombre de la persona que reporta: " + this.seComunica + "\n";
        info +=
          "Descripcion: Cliente reporta no tener servicio, se detecta afectacion en la zona. \n";
        info += "Persona para contacto: \n";
        info += "Tel: \n";
        info += "Horario de atencion: \n";
        info += "Dias de atencion: \n";

        this.descripcion += "\n" + info;
      });
    },

    verMasivas: function () {
      if (this.listaMasivas.length < 1) {
        Swal.fire("Sin informacion", "No hay masivas registradas", "error");
      } else {
        info = "";
        for (masiva of this.listaMasivas) {
          info +=
            "Folio SF: " +
            masiva.folioSf +
            " FolioSD: " +
            masiva.folioSd +
            " - " +
            masiva.ciudad +
            "(" +
            masiva.tipo +
            ")" +
            "<br><hr>";
        }

        Swal.fire({
          title: "Masivas activas",
          width: "80%",
          html: info,
        });
      }
    },

    borrarMasivas: function () {
      Swal.fire({
        title:
          "Deseas eliminar la informacion de las fallas masivas registradas?",
        icon: "info",
        showDenyButton: false,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: `Aceptar`,
      }).then((result) => {
        if (result.isConfirmed) {
          if (this.dev) {
            this.listaMasivas = [];
            localStorage.removeItem("listaMasivasDEV");
          } else {
            this.listaMasivas = [];
            localStorage.removeItem("listaMasivas");
          }

          Swal.fire("Borradas", "Informacion de masivas eliminada", "success");
        }
      });
    },

    cerrarDia: function () {
      Swal.fire({
        title:
          "Deseas cerrar el dia? Se va a borrar la lista de llamadas de hoy",
        icon: "question",
        showDenyButton: false,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: `Aceptar`,
      }).then((result) => {
        if (result.isConfirmed) {
          if (this.dev) {
            localStorage.removeItem("listaLlamadasDEV");
          } else {
            localStorage.removeItem("listaLlamadas");
          }

          location.reload();
        }
      });
    },

    actualizarLocalStorage: function (listaLlamadas, listaMasivas) {
      if (this.dev) {
        localStorage.setItem("listaLlamadasDEV", JSON.stringify(listaLlamadas));
        localStorage.setItem("listaMasivasDEV", JSON.stringify(listaMasivas));
      } else {
        localStorage.setItem("listaLlamadas", JSON.stringify(listaLlamadas));
        localStorage.setItem("listaMasivas", JSON.stringify(listaMasivas));
      }
    },
  },
});
