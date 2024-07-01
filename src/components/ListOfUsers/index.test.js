const { ListOfUsers } = require(".");

// renders a table with user data correctly
it("should render a table with user data correctly when users are provided", () => {
  const users = [
    {
      uuid: "1",
      email: "user1@example.com",
      isAdmin: true,
      isActive: true,
      registrationDate: 1633036800000,
      lastLogin: 1633123200000,
    },
    {
      uuid: "2",
      email: "user2@example.com",
      isAdmin: false,
      isActive: false,
      registrationDate: 1633036800000,
      lastLogin: 1633123200000,
    },
  ];

  const startPolling = jest.fn();
  const stopPolling = jest.fn();

  const { getByText } = render(
    <ListOfUsers
      users={users}
      startPolling={startPolling}
      stopPolling={stopPolling}
    />
  );

  expect(getByText("user1@example.com")).toBeInTheDocument();
  expect(getByText("user2@example.com")).toBeInTheDocument();
  expect(startPolling).toHaveBeenCalledWith(600000);
});
