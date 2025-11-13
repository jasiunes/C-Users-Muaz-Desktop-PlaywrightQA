#!/bin/bash
# Script to calculate Simple Interest

echo "Enter Principal:"
read P
echo "Enter Rate of Interest:"
read R
echo "Enter Time (in years):"
read T

SI=$(echo "scale=2; ($P * $R * $T) / 100" | bc)
echo "Simple Interest = $SI"
