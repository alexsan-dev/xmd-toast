interface IToast {
  text: string;
  actionText?: string;
  onHide?: Function;
  action?: (e: MouseEvent) => void;
  fixed?: boolean;
  time?:number;
}

const dataD:IToast = {
  text:"Alerta",
  actionText:"Aceptar",
  onHide:() => {},
  action:() => {},
  fixed:false,
  time:5000
}

const toast = (p:IToast) => {
  let allToast: NodeListOf<HTMLDivElement> = document.querySelectorAll(".toast") as NodeListOf<HTMLDivElement>;
  let div: HTMLDivElement = document.createElement("div") as HTMLDivElement;
  let span: HTMLDivElement = document.createElement("span") as HTMLDivElement;
  let btn: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;

  // PARAMETROS POR DEFECTO
  let data:IToast = p || dataD;
  let time:number = data.time || 5000;

  // LIMPIAR TODOS LOS TOAST ANTERIORES
  allToast.forEach((el: HTMLDivElement) => document.body.removeChild(el));

  // AGREGAR CLASE 
  div.classList.add("toast");
  div.style.cssText = "box-sizing:border-box;position: fixed;bottom: 0;left: 0;width: 100%;transform: translateY(100%);transition: transform 0.3s ease-in-out;background: #444;padding: 23px 20px;display: flex;align-items: center;justify-content: space-between;z-index: 99;"

  // ESTILOS
  span.style.cssText = "font-size: 1.1em;font-weight: bold;color:#fff;"
  btn.style.cssText = "position:relative;appearance: none;border: none;outline: none;background: rgba(0, 0, 0, .4);color:#fff;padding: 15px 25px;text-transform: uppercase;font-weight: bold;border-radius: 5px;cursor: pointer;"

  if (data.actionText) div.style.padding = "10px 20px";
  span.textContent = data.text;
  btn.textContent = data.actionText || "";

  // EVENTO DE CLICK EN EL BOTON ACCION
  btn.addEventListener("click", (e:MouseEvent) =>{
    if(data.action) data.action(e); 
    div.style.transform = "translateY(100%)";
    setTimeout(() => {
      try { document.body.removeChild(div) }
      catch { }
      if (data.onHide) data.onHide();
    }, time + 300);
  });

  // AGREGAR DIV AL BODY
  div.appendChild(span);
  if (data.actionText) div.appendChild(btn);
  document.body.appendChild(div);

  // ANIMAR HACIA ARRIBA
  setTimeout(() => {
    div.style.transform = "translateY(0)";
  }, 10)

  // NO ELIMINAR SI ES UN MENSAJE FIJO
  if (!data.fixed) {
    setTimeout(() => {
      div.style.transform = "translateY(100%)";
    }, time);

    setTimeout(() => {
      try { document.body.removeChild(div) }
      catch {}
      if (data.onHide) data.onHide();
    }, time + 300);
  }
}

export default toast;