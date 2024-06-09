import {
  Breadcrumbs,
  Chip,
  emphasize,
  Link,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    paddingRight: '0px',
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {},
    span: { paddingRight: '0px' },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;
export interface IBreadcrumb {
  mainPage: { name: string; link: string; icon: any };
  ParentPages: { name: string; link: string }[];
  currentPage: string;
}

const Breadcrumb = ({ ParentPages, mainPage, currentPage }: IBreadcrumb) => {
  return (
    <Breadcrumbs separator=">>" aria-label="breadcrumb">
      <StyledBreadcrumb
        className="text-primary !p-[0px]"
        component="a"
        href={mainPage.link}
        label={mainPage.name}
        icon={mainPage.icon}
      />
      {ParentPages.map((p) => (
        <Link
          className="!m-0 font-[Comfortaa] text text-[12px]"
          underline="hover"
          color="inherit"
          href={p.link}
        >
          {p.name}
        </Link>
      ))}
      <Typography
        className="!m-0 font-[Comfortaa] text text-[12px]"
        color="text.primary"
      >
        {currentPage}
      </Typography>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
