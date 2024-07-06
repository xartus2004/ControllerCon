'use client'
import { Button } from '@mui/material';

export default function PfButton({ text = 'Default Text', action }: { text?: string, action?: any | undefined}) {
    return <Button className="PfButton" variant="outlined" onClick={action}>{text}</Button>;
}
