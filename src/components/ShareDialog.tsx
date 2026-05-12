import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import QRCode from 'react-qr-code';
import { useT } from '../i18n/useLangContext';

interface ShareDialogProps {
  open: boolean;
  onClose: () => void;
}

function getHomeUrl(): string {
  if (typeof window === 'undefined') return '';
  // HashRouter puts route state in the fragment; the home page is just the
  // base document URL with no hash, no query.
  return window.location.origin + window.location.pathname;
}

export default function ShareDialog({ open, onClose }: ShareDialogProps) {
  const t = useT();
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (open) {
      setUrl(getHomeUrl());
      setCopied(false);
    }
  }, [open]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback: select the input — user can copy manually
      const input = document.getElementById(
        'share-dialog-link-input',
      ) as HTMLInputElement | null;
      if (input) {
        input.focus();
        input.select();
      }
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      data-testid="share-dialog"
    >
      <DialogTitle sx={{ pr: 6 }}>
        {t.share_title}
        <IconButton
          onClick={onClose}
          aria-label="close"
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={3} sx={{ pt: 1 }}>
          <TextField
            id="share-dialog-link-input"
            value={url}
            label={t.share_link_label}
            fullWidth
            slotProps={{
              input: {
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title={copied ? t.share_copied : t.share_copy}>
                      <IconButton
                        onClick={handleCopy}
                        aria-label={t.share_copy}
                        data-testid="share-copy-button"
                        edge="end"
                      >
                        {copied ? (
                          <CheckIcon fontSize="small" color="success" />
                        ) : (
                          <ContentCopyIcon fontSize="small" />
                        )}
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              },
            }}
            data-testid="share-link-field"
            onFocus={(e) => e.target.select()}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {t.share_scan_hint}
            </Typography>
            <Box
              sx={{
                p: 2,
                bgcolor: '#fff',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
              }}
              data-testid="share-qrcode"
            >
              {url && (
                <QRCode
                  value={url}
                  size={180}
                  bgColor="#ffffff"
                  fgColor="#1a1a1a"
                />
              )}
            </Box>
          </Box>

          <Button onClick={onClose} fullWidth variant="text" color="inherit">
            {t.share_close}
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
