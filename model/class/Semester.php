<?php

class Semester
{
    private string $title;
    private string $description;
    private string $icon;
    private string $iconPath;
    private string $whiteIcon;
    private string $schoolName;
    private string $schoolIcon;
    private string $schoolIconPath;
    private string $schoolLocation;
    private string $schoolAddress;
    private ?string $subjects;
    private array $specialties;
    private DateTime $startingDate;
    private DateTime $endingDate;

    public function __construct(array $semester)
    {
        $this->title = $semester['title'];
        $this->description = $semester['description'];
        $this->startingDate = new DateTime($semester['starting_date']);
        $this->endingDate = new DateTime($semester['ending_date']);
        $this->icon = $semester['icon'];
        $this->iconPath = PATH_IMAGES . 'course/' . $this->icon;
        $this->whiteIcon = $semester['white_icon'];
        $this->schoolIcon = $semester['school_icon'];
        $this->schoolIconPath = PATH_IMAGES . 'course/semester/' . $this->schoolIcon;
        $this->specialties = $semester['specialties'];
        $this->subjects = $semester['subjects'];
        $this->schoolName = $semester['school_name'];
        $this->schoolLocation = $semester['school_location'];
        $this->schoolAddress = $semester['school_address'];
    }

    public static function processRow(array $semesters): array
    {
        $semesters = array_map(function ($semester) {
            return new Semester($semester);
        }, $semesters);

        $tmp_result = [];
        foreach ($semesters as $semester) {
            $tmp_result[] = $semester;
        }
        return $tmp_result;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getStartingDate(): DateTime
    {
        return $this->startingDate;
    }

    public function getEndingDate(): DateTime
    {
        return $this->endingDate;
    }

    public function formatStartingDate(): string
    {
        return $this->startingDate->format('d/m/Y');
    }

    public function formatEndingDate(): string
    {
        return $this->endingDate->format('d/m/Y');
    }

    public function getIconPath(): string
    {
        return $this->iconPath;
    }

    public function getIcon(): string
    {
        return $this->icon;
    }

    public function getWhiteIcon(): string
    {
        return $this->whiteIcon;
    }

    public function getWhiteIconPath(): string
    {
        return PATH_IMAGES . 'course/' . $this->whiteIcon;
    }

    public function getSchoolIcon(): string
    {
        return $this->schoolIcon;
    }

    public function getSchoolIconPath(): string
    {
        return $this->schoolIconPath;
    }

    public function getSpecialties(): ?array
    {
        return $this->specialties;
    }

    public function hasSpecialties(): bool
    {
        return count($this->specialties) > 0;
    }

    public function getSubjects(): ?string
    {
        return $this->subjects;
    }

    public function getSubjectsPath(): ?string
    {
        return PATH_IMAGES . 'course/semester/' . $this->subjects;
    }

    public function hasSubjects(): bool
    {
        return $this->subjects != null;
    }

    public function getSchoolName(): string
    {
        return $this->schoolName;
    }

    public function getSchoolLocation(): string
    {
        return $this->schoolLocation;
    }

    public function getSchoolAddress(): string
    {
        return $this->schoolAddress;
    }
}
