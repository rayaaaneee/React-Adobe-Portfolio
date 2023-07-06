<?php

class Language
{
    private string $name;
    private string $color;

    public function __construct(array $language)
    {
        $this->name = $language['name'];
        $this->color = $language['color'];
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getColor(): string
    {
        return $this->color;
    }

    public function displayLanguage(): string
    {
        return $this->name . ' - ' . $this->color;
    }
}
