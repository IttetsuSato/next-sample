import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/test";
import { screen } from "@testing-library/react";
import Page from "./page";

const meta: Meta<typeof Page> = {
  component: Page,
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  play: async () => {
    const page = screen.getByRole("heading", { level: 1, name: "Home" });
    expect(page).toBeDefined();
  },
};
