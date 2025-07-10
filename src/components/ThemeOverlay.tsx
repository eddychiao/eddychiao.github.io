import React from 'react';
import { useTheme } from '../context/ThemeContext';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import './ThemeOverlay.css';

const themes = {
  vermilion: {
    backgroundColor: '#FFF1E6',
    headerColor: '#E42015',
    textColor: '#315C4F',
    buttonColor: '#CDA952',
  },
  porcelain: {
    backgroundColor: '#F0EDE8',
    headerColor: '#266DD3',
    textColor: '#DE5246',
    buttonColor: '#468A96',
  },
  katana: {
    backgroundColor: '#333333',
    headerColor: '#A799B7',
    textColor: '#F5F5DC',
    buttonColor: '#F78764',
  },
};

const ThemeOverlay: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [view, setView] = React.useState<string>(() => {
    // Retrieve the saved theme name from localStorage or default to 'vermilion'
    return localStorage.getItem('themeName') || 'vermilion';
  });

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    gap: '0.4rem',
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
      <ToggleButton className="toggle-option-vermilion-button" value="vermilion" aria-label="vermilion">
        <div className="toggle-option-vermilion-text">Vermilion</div>
      </ToggleButton>
      <ToggleButton className="toggle-option-porcelain-button" value="porcelain" aria-label="porcelain">
        <div className="toggle-option-porcelain-text">Porcelain</div>
      </ToggleButton>
      <ToggleButton className="toggle-option-katana-button" value="katana" aria-label="katana">
        <div className="toggle-option-katana-text">Katana</div>
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
};

export default ThemeOverlay;