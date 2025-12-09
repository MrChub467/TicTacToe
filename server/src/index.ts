import Server from "./server/server";

class TicTacToe {
  public run(): void {
    const server = new Server();

    server.start();
  }
}

const game = new TicTacToe();
game.run();
