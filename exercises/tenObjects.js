let phone = {
  type: '6splus',
  camera: 2,
  case: true,
  apps: [
    { clock: {uses: ["alarm", 'time telling', 'sleep']}}
  ]
  update: function upd() {
    let version = 0
    if (needUpdate) {
      return version + 1;
    }
  }
}

let cup = {
  type: "coffee",
  handle: true,
  volume: 8.0,
  
}