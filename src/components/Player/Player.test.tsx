import { render, screen } from "@testing-library/react";
import { Player } from "./Player";
import { PlayersList } from "./PlayersList";

describe("Player tests", () => {
  test("renders correctly", () => {
    render(<Player />);
    expect(screen.getByText("Add a Player:")).toBeDefined();
  });

  test("displays correct list of players", () => {
    const list = [
      {
        name: "Name A",
        age: 50,
        team: "team A",
      },
    ];
    render(<PlayersList list={list} setList={() => {}} />);
    expect(screen.getByText(list[0].name)).toBeDefined();
    expect(screen.getByText(`${list[0].age} - ${list[0].team}`)).toBeDefined();
  });
});
