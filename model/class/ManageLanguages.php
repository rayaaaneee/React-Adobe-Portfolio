<?php

require_once(PATH_CLASSES . 'FetchJSON.php');
require_once(PATH_CLASSES . 'Language.php');

class ManageLanguages
{
    public static ?self $instance = null;
    private array $languages = [];

    private function __construct()
    {
        $languages_array = FetchJSON::fetchLocalJSON(PATH_DATAS . 'home/language.json');
        foreach ($languages_array as $key => $value) {
            $tmp_key = strtoupper($key);
            $this->languages[$tmp_key] = new Language($value);
        }
    }

    public function getLanguages(): array
    {
        return $this->languages;
    }

    public function getLanguage(string $language): Language
    {
        return $this->languages[$language];
    }

    public static function getInstance(): ManageLanguages
    {
        static $instance = null;
        if ($instance === null) {
            $instance = new ManageLanguages();
        }
        return $instance;
    }
}
