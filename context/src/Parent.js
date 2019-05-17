import React from 'react'
import { Child } from './Child';

export const Parent = ({ children }) => children(<Child />);