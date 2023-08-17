import * as React from "react"
import { Box, Typography, List, ListItemText } from "@mui/material"
export default function Hero({
  title = "The Developer's Toolkit",
  subtitle = "A terminal, editor, screenshot tool, file explorer, and database GUI, all—of course—powered by artificial intelligence.",
  items = []
}) {
  return (
    <Box
      sx={{
        flex: 1,
        height: "60vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        my: 6,
        textAlign: "center",
      }}
    >
      
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "4xl", sm: "5xl", md: "6xl" },
          fontWeight: 800,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "lg",
          color: "gray.500",
          maxWidth: "54ch",
        }}
      >
        {subtitle}
      </Typography>

      <List>
        {items.map((item) => (
          <ListItemText
          key={item}
            primary={item}
          />

        ))}
      </List>
    </Box>
  )
}