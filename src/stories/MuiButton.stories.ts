import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MuiButton } from "./MuiButton";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/MuiButton",
  component: MuiButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof MuiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Contained: Story = {
  args: {
    variant: "contained",
    isActiveBtn: true,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    isActiveBtn: false,
  },
};

