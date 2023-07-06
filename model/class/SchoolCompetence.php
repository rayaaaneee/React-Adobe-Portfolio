<?php

class SchoolCompetence
{
    private string $title;
    private string $description;
    private string $image;
    private string $gradient;
    private string $titleColor;
    private string $infoIcon;
    private string $bottomColor;

    public function __construct(array $data)
    {
        $this->title = $data['title'];
        $this->description = $data['description'];
        $this->image = $data['image'];
        $this->gradient = $data['gradient'];
        $this->titleColor = $data['title_color'];
        $this->infoIcon = $data['info_icon'];
        $this->bottomColor = $data['bottom_color'];
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getImage(): string
    {
        return $this->image;
    }

    public function getImagePath(): string
    {
        return PATH_IMAGES . "home/card/" . $this->image;
    }

    public function getGradient(): string
    {
        return $this->gradient;
    }

    public function getTitleColor(): string
    {
        return $this->titleColor;
    }

    public function getInfoIcon(): string
    {
        return $this->infoIcon;
    }

    public function getInfoIconPath(): string
    {
        return PATH_IMAGES . "home/card/" . $this->infoIcon;
    }

    public function getBottomColor(): string
    {
        return $this->bottomColor;
    }
}
