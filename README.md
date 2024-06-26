<div align="center">

  # 📦 desktop-app-template
  <sub>A template we use to get started with desktop apps.</sub>

</div>

<br>

# 🛠️ How to install for development.

### Prerequisites:
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Tauri CLI](https://crates.io/crates/tauri-cli)
- [Rust](https://www.rust-lang.org/tools/install) (must be **1.60+**)
- [Make](https://www.gnu.org/software/make) (recommended, otherwise you'll need to run commands from the [Makefile](./Makefile) manually)

1. Clone the repo.
```sh
git clone https://github.com/cloudy-org/desktop-app-template
```
2. Pull the submodules (includes [ctk](https://github.com/cloudy-org/cirrus)).
```sh
git submodule update --init --recursive
```
3. Install npm dependencies.
```sh
make install-deps
```
4. Run the application in development mode.
```sh
make run
```

<br>

> TODO: README