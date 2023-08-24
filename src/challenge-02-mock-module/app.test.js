import { getBestPlayer } from "./app";
import * as serviceModule from "./service";

jest.mock("./service");

describe("getBestPlayer", () => {
  it("should return the best player", () => {
    // TODO: implement test
    const users = [
      { name: "Player 1", score: 100 },
      { name: "Player 2", score: 200 },
      { name: "Player 3", score: 300 },
    ];
    const expectUser = { name: "Player 3", score: 300 };
    serviceModule.getAllPlayers.mockReturnValue(users);

    const user = getBestPlayer();

    expect(serviceModule.getAllPlayers).toHaveBeenCalled();
    expect(user).toEqual(expectUser);
  });
});
