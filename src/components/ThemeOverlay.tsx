import React from 'react';
import { useTheme } from '../context/ThemeContext';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import './ThemeOverlay.css';

import * as constants from '../const/enum';

const themes = constants.colors;

const ThemeOverlay: React.FC = () => {
  const { setTheme } = useTheme();
  const [view, setView] = React.useState<string>(() => {
    return localStorage.getItem('themeName') || 'braves';
  });

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    gap: '0.25rem',
    [`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.middleButton}`]:
      {
        borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
        borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
      },
    [`& .${toggleButtonGroupClasses.lastButton}, & .${toggleButtonGroupClasses.middleButton}`]:
      {
        borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
        borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
        borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
      },
    [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled}, & .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]:
      {
        borderTop: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`,
      },
  }));

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    if (nextView !== null) {
      setView(nextView);
      setTheme(themes[nextView as keyof typeof themes]); // Update the theme in context
      localStorage.setItem('themeName', nextView); // Persist the selected theme name
    }
  };

  return (
    <StyledToggleButtonGroup
      className="theme-overlay"
      value={view}
      exclusive
      onChange={handleChange}
      aria-label="theme selection"
      orientation="vertical"
    >
      <ToggleButton className="toggle-option-braves-button"    value="braves"     aria-label="braves"     data-label="Braves"    />
      <ToggleButton className="toggle-option-dusk-button"      value="dusk"       aria-label="dusk"       data-label="Dusk"      />
      <ToggleButton className="toggle-option-falcon-button"    value="falcon"     aria-label="falcon"     data-label="Falcon"    />
      <ToggleButton className="toggle-option-katana-button"    value="katana"     aria-label="katana"     data-label="Katana"    />
      <ToggleButton className="toggle-option-knicks-button"    value="knicks"     aria-label="knicks"     data-label="Knicks"    />
      <ToggleButton className="toggle-option-matcha-button"    value="matcha"     aria-label="matcha"     data-label="Matcha"    />
      <ToggleButton className="toggle-option-mist-button"      value="mist"       aria-label="mist"       data-label="Mist"      />
      <ToggleButton className="toggle-option-sakura-button"    value="sakura"     aria-label="sakura"     data-label="Sakura"    />
    </StyledToggleButtonGroup>
  );
};

export default ThemeOverlay;