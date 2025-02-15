import "@/components/phone-input/PhoneInput";
import { withA11y } from "@storybook/addon-a11y";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { html } from "lit-element";
import "../theme/Theme";

export default {
  title: "Components/Phone Input",
  component: "md-phone-input",
  decorators: [withKnobs, withA11y],
  parameters: {
    a11y: {
      element: "md-phone-input"
    }
  }
};

export const PhoneInput = () => {
  const darkTheme = boolean("darkMode", false);
  const lumos = boolean("Lumos Theme", false);

  const pill = boolean("pill", false);
  const disabled = boolean("disabled", false);

  const codePlaceholder = text("codePlaceholder", "+1");
  const numberPlaceholder = text("numberPlaceholder", "Enter Phone Number");
  const countryCallingCode = text("country-calling-code", "Enter Phone Number");
  const value = text("value", "");
  const errorMessage = text("errorMessage", "");

  return html`
    <md-theme class="theme-toggle" id="datetimepicker" ?darkTheme=${darkTheme} ?lumos=${lumos}>
      <md-phone-input
        ?pill=${pill}
        ?disabled=${disabled}
        value=${value}
        codePlaceholder=${codePlaceholder}
        numberPlaceholder=${numberPlaceholder}
        country-calling-code=${countryCallingCode}
        errorMessage=${errorMessage}
      >
      </md-phone-input>
    </md-theme>
  `;
};
