import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { TemplateName as TemplateNameComponent } from ".";

export default {
  title: "TemplateName",
  component: TemplateNameComponent,
  args: {
    name: "TemplateName",
  },
  argTypes: {},
} as ComponentMeta<typeof TemplateNameComponent>;

const Template: ComponentStory<typeof TemplateNameComponent> = (args) => <TemplateNameComponent {...args} />;

export const TemplateName = Template.bind({});
